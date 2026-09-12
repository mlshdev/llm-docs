> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanifest/initwithcontentsofurl:applicationgroupidentifier:error:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanifest/initwithcontentsofurl:applicationgroupidentifier:error:)

# initWithContentsOfURL:applicationGroupIdentifier:error:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes a representation of a manifest in memory given a URL to the manifest’s representation as a JSON file on disk.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) URL applicationGroupIdentifier:(NSString *) applicationGroupIdentifier error:(NSError **) error;
```

## Parameters

- `URL`: A URL to a local JSON file.
- `applicationGroupIdentifier`: The identifier of the application group in which to store unmanaged asset packs that are downloaded from the manifest.
- `error`: A pointer to an error that will be set if an error occurs.

## See Also

### Creating an asset pack manifest

- [initFromData:applicationGroupIdentifier:error:](initfromdata_applicationgroupidentifier_error_.md): Initializes a representation of a manifest in memory from JSON-encoded data.
