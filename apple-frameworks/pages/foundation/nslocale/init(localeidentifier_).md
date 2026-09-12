> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/init(localeidentifier:)](https://developer.apple.com/documentation/foundation/nslocale/init(localeidentifier:))

# init(localeIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a locale using a given locale identifier.

## Declaration

```swift
init(localeIdentifier string: String)
```

## Parameters

- `string`: The identifier for the new locale.

<a id="return-value"></a>

## Return Value

The initialized locale.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for this class.

## See Also

### Related Documentation

- [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i)
- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Initializing a Locale

- [init(coder:)](init%28coder_%29.md): Returns a locale initialized from data in the given unarchiver.

# initWithLocaleIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a locale using a given locale identifier.

## Declaration

```objectivec
- (instancetype) initWithLocaleIdentifier:(NSString *) string;
```

## Parameters

- `string`: The identifier for the new locale.

<a id="return-value"></a>

## Return Value

The initialized locale.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for this class.

## See Also

### Related Documentation

- [Internationalization and Localization Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/Introduction/Introduction.html#//apple_ref/doc/uid/10000171i)
- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)

### Initializing a Locale

- [localeWithLocaleIdentifier:](localewithlocaleidentifier_.md): Returns a locale initialized using the given locale identifier.
- [initWithCoder:](init%28coder_%29.md): Returns a locale initialized from data in the given unarchiver.
