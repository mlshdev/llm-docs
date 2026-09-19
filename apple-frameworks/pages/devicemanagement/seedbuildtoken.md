> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/seedbuildtoken

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
