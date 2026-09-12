> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinput/textstyling(at:in:)](https://developer.apple.com/documentation/browserenginekit/betextinput/textstyling(at:in:))

# textStyling(at:in:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Provides a dictionary that customizes the appearance of strings.

## Declaration

```swift
func textStyling(at position: UITextPosition, in direction: UITextStorageDirection) -> [NSAttributedString.Key : Any]?
```

<a id="discussion"></a>

## Discussion

The returned strings might pertain to text styling information for a correction rectangle, for example.

# textStylingAtPosition:inDirection: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Provides a dictionary that customizes the appearance of strings.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) textStylingAtPosition:(UITextPosition *) position inDirection:(UITextStorageDirection) direction;
```

<a id="discussion"></a>

## Discussion

The returned strings might pertain to text styling information for a correction rectangle, for example.
