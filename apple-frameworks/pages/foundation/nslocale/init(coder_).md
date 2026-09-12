> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/init(coder:)](https://developer.apple.com/documentation/foundation/nslocale/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale initialized from data in the given unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The decoder to use during initialization.

<a id="return-value"></a>

## Return Value

The initialized locale.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Initializing a Locale

- [init(localeIdentifier:)](init%28localeidentifier_%29.md): Initializes a locale using a given locale identifier.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale initialized from data in the given unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The decoder to use during initialization.

<a id="return-value"></a>

## Return Value

The initialized locale.

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Initializing a Locale

- [localeWithLocaleIdentifier:](localewithlocaleidentifier_.md): Returns a locale initialized using the given locale identifier.
- [initWithLocaleIdentifier:](init%28localeidentifier_%29.md): Initializes a locale using a given locale identifier.
