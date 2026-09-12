> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/init(location:end:)](https://developer.apple.com/documentation/uikit/nstextrange/init(location:end:))

# init(location:end:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new text range with the starting and ending locations you specify.

## Declaration

```swift
init?(location: any NSTextLocation, end endLocation: (any NSTextLocation)?)
```

## Parameters

- `location`: The starting location.
- `endLocation`: The ending location, or `nil` for an empty range.

<a id="discussion"></a>

## Discussion

Returns an empty range when `endLocation` is `nil`.

## See Also

### Creating a text range

- [init(location:)](init%28location_%29.md): Creates a new text range at the location you specify.

# initWithLocation:endLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new text range with the starting and ending locations you specify.

## Declaration

```objectivec
- (instancetype) initWithLocation:(id<NSTextLocation>) location endLocation:(id<NSTextLocation>) endLocation;
```

## Parameters

- `location`: The starting location.
- `endLocation`: The ending location, or `nil` for an empty range.

<a id="discussion"></a>

## Discussion

Returns an empty range when `endLocation` is `nil`.

## See Also

### Creating a text range

- [initWithLocation:](init%28location_%29.md): Creates a new text range at the location you specify.
