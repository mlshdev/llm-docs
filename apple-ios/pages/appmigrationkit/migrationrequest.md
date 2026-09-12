> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/migrationrequest](https://developer.apple.com/documentation/appmigrationkit/migrationrequest)

# MigrationRequest

**Framework:** AppMigrationKit  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A migration request that uses the default supported options.

## Declaration

```swift
typealias MigrationRequest = MigrationRequestWithOptions<MigrationDefaultSupportedOptions>
```

<a id="discussion"></a>

## Discussion

This type alias is a [MigrationRequestWithOptions](migrationrequestwithoptions.md) with the `OptionsType` generic constraint [MigrationDefaultSupportedOptions](migrationdefaultsupportedoptions.md). Use this type of request for migrations that don’t need to incorporate any options specific to the counterpart operating system.

## See Also

### Supporting types

- [MigrationRequestWithOptions](migrationrequestwithoptions.md): An object that exposes properties of the migration request.
