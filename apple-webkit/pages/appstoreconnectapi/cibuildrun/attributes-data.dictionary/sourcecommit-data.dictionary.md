> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/attributes-data.dictionary/sourcecommit-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/attributes-data.dictionary/sourcecommit-data.dictionary)

# CiBuildRun.Attributes.SourceCommit

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The latest commit of a Git branch or tag, or of a pull request’s source branch.

## Declaration

```
object CiBuildRun.Attributes.SourceCommit
```

## Properties

- `author` — `CiGitUser`: The author of the commit.
- `commitSha` — `string`: The commit hash.
- `committer` — `CiGitUser`: The commit’s Git committer.
- `message` — `string`: The commit message.
- `webUrl` — `uri`: The commit URL.

## See Also

### Objects and types

- [CiBuildRun.Attributes.DestinationCommit](destinationcommit-data.dictionary.md): The latest commit of a pull request’s target branch or the source commit for builds that aren’t pull request builds.
- [CiGitUser](../../cigituser.md): The Git identity (name and email) of the person who authored or committed the code change that triggered an Xcode Cloud build.
- [CiIssueCounts](../../ciissuecounts.md): A summary of the warnings, errors, analyzer warnings, and test failures in an Xcode Cloud build run.
- [CiCompletionStatus](../../cicompletionstatus.md): A string that represents the completion status of an Xcode Cloud build.
- [CiExecutionProgress](../../ciexecutionprogress.md): A string that represents the progress of an ongoing Xcode Cloud build.
