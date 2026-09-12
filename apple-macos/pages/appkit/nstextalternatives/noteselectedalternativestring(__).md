> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextalternatives/noteselectedalternativestring(_:)](https://developer.apple.com/documentation/appkit/nstextalternatives/noteselectedalternativestring(_:))

# noteSelectedAlternativeString(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Sent to the `NSTextAlternatives` object by the text view when the user chooses one of the alternative strings.

## Declaration

```swift
func noteSelectedAlternativeString(_ alternativeString: String)
```

## Parameters

- `alternativeString`: The alternative string chosen by the user.

<a id="Discussion"></a>

## Discussion

The base class implementation sends a notification, `NSTextAlternativesSelectedAlternativeStringNotification`, with the selected alternative string in the user info under the key `@"NSAlternativeString"`. Using this mechanism, arbitrary objects can listen for user selections of alternative strings.

# noteSelectedAlternativeString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Sent to the `NSTextAlternatives` object by the text view when the user chooses one of the alternative strings.

## Declaration

```objectivec
- (void) noteSelectedAlternativeString:(NSString *) alternativeString;
```

## Parameters

- `alternativeString`: The alternative string chosen by the user.

<a id="Discussion"></a>

## Discussion

The base class implementation sends a notification, `NSTextAlternativesSelectedAlternativeStringNotification`, with the selected alternative string in the user info under the key `@"NSAlternativeString"`. Using this mechanism, arbitrary objects can listen for user selections of alternative strings.
