> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/init(location:)](https://developer.apple.com/documentation/uikit/nstextrange/init(location:))

# init(location:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new text range at the location you specify.

## Declaration

```swift
convenience init(location: any NSTextLocation)
```

## Parameters

- `location`: An [NSTextLocation](../nstextlocation.md).

## See Also

### Creating a text range

- [init(location:end:)](init%28location_end_%29.md): Creates a new text range with the starting and ending locations you specify.

# initWithLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new text range at the location you specify.

## Declaration

```objectivec
- (instancetype) initWithLocation:(id<NSTextLocation>) location;
```

## Parameters

- `location`: An [NSTextLocation](../nstextlocation.md).

## See Also

### Creating a text range

- [initWithLocation:endLocation:](init%28location_end_%29.md): Creates a new text range with the starting and ending locations you specify.
