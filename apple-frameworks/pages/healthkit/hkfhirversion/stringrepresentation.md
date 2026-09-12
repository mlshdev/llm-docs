> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkfhirversion/stringrepresentation](https://developer.apple.com/documentation/healthkit/hkfhirversion/stringrepresentation)

# stringRepresentation (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

A string representation of the version.

## Declaration

```swift
var stringRepresentation: String { get }
```

<a id="Discussion"></a>

## Discussion

The string representation uses the following format: `<major>.<minor>.<patch>`.

## See Also

### Accessing Version Data

- [majorVersion](majorversion.md): The standard’s major version number.
- [minorVersion](minorversion.md): The standard’s minor version number.
- [patchVersion](patchversion.md): The standard’s patch version number.

# stringRepresentation (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+

A string representation of the version.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * stringRepresentation;
```

<a id="Discussion"></a>

## Discussion

The string representation uses the following format: `<major>.<minor>.<patch>`.

## See Also

### Accessing Version Data

- [majorVersion](majorversion.md): The standard’s major version number.
- [minorVersion](minorversion.md): The standard’s minor version number.
- [patchVersion](patchversion.md): The standard’s patch version number.
