> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/platform/custom(_:)](https://developer.apple.com/documentation/packagedescription/platform/custom(_:))

# custom(\_:)

**Framework:** PackageDescription  
**Kind:** Type Method  
**Availability:** SwiftPM 5.6+

Creates a custom platform.

## Declaration

```swift
static func custom(_ platformName: String) -> Platform
```

## Parameters

- `platformName`: The name of the platform.

<a id="return-value"></a>

## Return Value

A `Platform` instance.

<a id="discussion"></a>

## Discussion

Use this function if none of the predefined platform names match the platform you are targeting.
