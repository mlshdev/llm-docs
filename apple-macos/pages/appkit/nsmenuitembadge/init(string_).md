> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmenuitembadge/init(string:)

# init(string:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a badge with the provided custom string.

## Declaration

```swift
init(string: String)
```

## Parameters

- `string`: The string label that displays when the badge appears.

## See Also

### Creating menu item badges

- [init(count:)](init%28count_%29.md): Creates a badge with a count and an empty string.

# initWithString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a badge with the provided custom string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) string;
```

## Parameters

- `string`: The string label that displays when the badge appears.

## See Also

### Creating menu item badges

- [initWithCount:](init%28count_%29.md): Creates a badge with a count and an empty string.
- [initWithCount:type:](initwithcount_type_.md): Initializes the badge with a count and a pre-defined badge type.
