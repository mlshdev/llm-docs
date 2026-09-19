> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctsourcecodesymbolinfo/location

# location (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

A representation of a location in source code where a test issue occurred.

## Declaration

```swift
var location: XCTSourceCodeLocation? { get }
```

## See Also

### Symbol Information

- [imageName](imagename.md): The name of the binary image that contains the symbolicated code.
- [symbolName](symbolname.md): A string that represents a human-readable symbol in source code.

# location (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

A representation of a location in source code where a test issue occurred.

## Declaration

```objectivec
@property (readonly, nullable) XCTSourceCodeLocation * location;
```

## See Also

### Symbol Information

- [imageName](imagename.md): The name of the binary image that contains the symbolicated code.
- [symbolName](symbolname.md): A string that represents a human-readable symbol in source code.
