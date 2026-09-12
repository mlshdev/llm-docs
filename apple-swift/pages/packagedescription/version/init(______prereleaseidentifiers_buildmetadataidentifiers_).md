> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/version/init(_:_:_:prereleaseidentifiers:buildmetadataidentifiers:)](https://developer.apple.com/documentation/packagedescription/version/init(_:_:_:prereleaseidentifiers:buildmetadataidentifiers:))

# init(\_:\_:\_:prereleaseIdentifiers:buildMetadataIdentifiers:)

**Framework:** PackageDescription  
**Kind:** Initializer

Initializes a version struct with the provided components of a semantic version.

## Declaration

```swift
init(_ major: Int, _ minor: Int, _ patch: Int, prereleaseIdentifiers: [String] = [], buildMetadataIdentifiers: [String] = [])
```

## Parameters

- `major`: The major version number.
- `minor`: The minor version number.
- `patch`: The patch version number.
- `prereleaseIdentifiers`: The pre-release identifier.
- `buildMetadataIdentifiers`: Build metadata that identifies a build.

<a id="discussion"></a>

## Discussion

> **Precondition**

> `major >= 0 && minor >= 0 && patch >= 0`.

> **Precondition**

> `prereleaseIdentifiers` can contain only ASCII alpha-numeric characters and “-”.

> **Precondition**

> `buildMetadataIdentifiers` can contain only ASCII alpha-numeric characters and “-”.
