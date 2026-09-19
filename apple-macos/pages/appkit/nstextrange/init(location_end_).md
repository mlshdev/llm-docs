> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextrange/init(location:end:)

# init(location:end:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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
