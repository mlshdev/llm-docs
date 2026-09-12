> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/seedbuildtoken](https://developer.apple.com/documentation/devicemanagement/seedbuildtoken)

# SeedBuildToken

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.1+

Describes a beta enrollment token available for the given organization.

## Declaration

```
object SeedBuildToken
```

## Properties

- `os` — `string`: The platform related to beta build. Possible values are: `homePodOS`, `iOS`, `OSX`, `tvOS`, `visionOS`, `watchOS`\]
- `title` — `string`: The public facing name, like “iOS 17 Public Beta”.
- `token` — `string`: The token to use when requesting the beta build.

## See Also

### Response

- [GetSeedBuildTokenResponse](getseedbuildtokenresponse.md): Provides a list of beta enrollment tokens available for the given organization.
