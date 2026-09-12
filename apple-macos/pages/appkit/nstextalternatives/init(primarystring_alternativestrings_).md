> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextalternatives/init(primarystring:alternativestrings:)](https://developer.apple.com/documentation/appkit/nstextalternatives/init(primarystring:alternativestrings:))

# init(primaryString:alternativeStrings:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Initializes an `NSTextAlternatives` instance.

## Declaration

```swift
init(primaryString: String, alternativeStrings: [String])
```

## Parameters

- `primaryString`: The string that is initially chosen as the input string.
- `alternativeStrings`: An array of alternative possible interpretations that the user might select.

<a id="return-value"></a>

## Return Value

An initialized `NSTextAlternatives` instance.

# initWithPrimaryString:alternativeStrings: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Initializes an `NSTextAlternatives` instance.

## Declaration

```objectivec
- (instancetype) initWithPrimaryString:(NSString *) primaryString alternativeStrings:(NSArray<NSString *> *) alternativeStrings;
```

## Parameters

- `primaryString`: The string that is initially chosen as the input string.
- `alternativeStrings`: An array of alternative possible interpretations that the user might select.

<a id="return-value"></a>

## Return Value

An initialized `NSTextAlternatives` instance.
