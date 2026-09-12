> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontdescriptor/init(fontattributes:)](https://developer.apple.com/documentation/uikit/uifontdescriptor/init(fontattributes:))

# init(fontAttributes:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a font descriptor with the specified attributes.

## Declaration

```swift
init(fontAttributes attributes: [UIFontDescriptor.AttributeName : Any] = [:])
```

## Parameters

- `attributes`: The attributes for the new font descriptor. If `nil`, the font descriptor’s attribute dictionary will be empty.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Initializing a font descriptor

- [init()](init%28%29.md): Creates a font descriptor.
- [init(coder:)](init%28coder_%29.md): Creates a font descriptor from data in an unarchiver.

# initWithFontAttributes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a font descriptor with the specified attributes.

## Declaration

```objectivec
- (instancetype) initWithFontAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: The attributes for the new font descriptor. If `nil`, the font descriptor’s attribute dictionary will be empty.

<a id="return-value"></a>

## Return Value

The new font descriptor.

## See Also

### Related Documentation

- [fontDescriptorWithFontAttributes:](fontdescriptorwithfontattributes_.md): Returns a font descriptor with a dictionary of attributes.

### Initializing a font descriptor

- [init](init%28%29.md): Creates a font descriptor.
- [initWithCoder:](init%28coder_%29.md): Creates a font descriptor from data in an unarchiver.
