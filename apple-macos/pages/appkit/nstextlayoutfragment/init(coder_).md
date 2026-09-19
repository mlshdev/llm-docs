> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextlayoutfragment/init(coder:)

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a new layout fragment with the coder you provide.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: A coder that conforms to [NSCoder](https://developer.apple.com/documentation/foundation/nscoder).

## See Also

### Creating a layout fragment

- [init(textElement:range:)](init%28textelement_range_%29.md): Create a new layout fragment using the provided text element and range.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a new layout fragment with the coder you provide.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: A coder that conforms to [NSCoder](https://developer.apple.com/documentation/foundation/nscoder).

## See Also

### Creating a layout fragment

- [initWithTextElement:range:](init%28textelement_range_%29.md): Create a new layout fragment using the provided text element and range.
