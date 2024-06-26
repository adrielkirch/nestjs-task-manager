import { TeamUserResponseDto } from 'src/adapters/response/teamUser.response.dto';
import { TeamUserRepositoryInterface } from 'src/data/protocols/db/team_user/teamUser.repository.interface';
import { TeamUserTransformer } from 'src/main/transformers/team_user/teamUser.transformer';
export class FindByUserIdAndTeamIdValue {

  constructor(private readonly teamUserRepo: TeamUserRepositoryInterface) { }

 /**findByPropertyAndValue.teamuser.usecase.ts
 * Loads a teamUser by their ID from the system.
 * @param property The property to search for.
 * @param value The value of the property to match.
 * @returns A Promise that resolves to the simplified representation of the loaded teamUser, or null if not found.
 */
  async findByUserIdAndTeamIdValue<T>(property: string, value: T): Promise<TeamUserResponseDto []> {
    const teamUsers = await this.teamUserRepo.findByPropertyAndValue(property, value);
    if (!teamUsers || teamUsers.length === 0) return null;
    return TeamUserTransformer.toTeams(teamUsers);
  }
}
