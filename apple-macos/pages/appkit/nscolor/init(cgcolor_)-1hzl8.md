> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(cgcolor:)-1hzl8](https://developer.apple.com/documentation/appkit/nscolor/init(cgcolor:)-1hzl8)

# init(cgColor:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Creates a color object using the specified Core Graphics color.

## Declaration

```swift
init?(cgColor: CGColor)
```

## Parameters

- `cgColor`: The Core Graphics color reference.

<a id="return-value"></a>

## Return Value

An `NSColor` instance.

<a id="Discussion"></a>

## Discussion

This method may return `nil`.

## See Also

### Converting other types of color objects

- [init(\_:)](init%28__%29.md)
- [init(CIColor:)](init%28cicolor_%29-3rxsk.md): Creates a color object from the specified Core Image color.

# colorWithCGColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.8+

Creates a color object using the specified Core Graphics color.

## Declaration

```objectivec
+ (NSColor *) colorWithCGColor:(CGColorRef) cgColor;
```

## Parameters

- `cgColor`: The Core Graphics color reference.

<a id="return-value"></a>

## Return Value

An `NSColor` instance.

<a id="Discussion"></a>

## Discussion

This method may return `nil`.
