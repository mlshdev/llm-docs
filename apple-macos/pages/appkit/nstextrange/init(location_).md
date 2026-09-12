> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextrange/init(location:)](https://developer.apple.com/documentation/appkit/nstextrange/init(location:))

# init(location:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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
