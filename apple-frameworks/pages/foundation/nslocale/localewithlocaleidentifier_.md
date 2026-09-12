> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/localewithlocaleidentifier:](https://developer.apple.com/documentation/foundation/nslocale/localewithlocaleidentifier:)

# localeWithLocaleIdentifier:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a locale initialized using the given locale identifier.

## Declaration

```objectivec
+ (instancetype) localeWithLocaleIdentifier:(NSString *) ident;
```

## Parameters

- `ident`: The identifier for the new locale.

<a id="return-value"></a>

## Return Value

The initialized locale.

## See Also

### Initializing a Locale

- [initWithLocaleIdentifier:](init%28localeidentifier_%29.md): Initializes a locale using a given locale identifier.
- [initWithCoder:](init%28coder_%29.md): Returns a locale initialized from data in the given unarchiver.
