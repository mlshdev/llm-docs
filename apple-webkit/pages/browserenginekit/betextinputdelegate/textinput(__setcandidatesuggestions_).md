> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinputdelegate/textinput(_:setcandidatesuggestions:)](https://developer.apple.com/documentation/browserenginekit/betextinputdelegate/textinput(_:setcandidatesuggestions:))

# textInput(\_:setCandidateSuggestions:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Provides text suggestions to the system.

## Declaration

```swift
func textInput(_ textInput: any BETextInput, setCandidateSuggestions suggestions: [BETextSuggestion]?)
```

<a id="discussion"></a>

## Discussion

For example, suggestions could include data list elements or AutoFill candidates.

# textInput:setCandidateSuggestions: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

Provides text suggestions to the system.

## Declaration

```objectivec
- (void) textInput:(id<BETextInput>) textInput setCandidateSuggestions:(NSArray<BETextSuggestion *> *) suggestions;
```

<a id="discussion"></a>

## Discussion

For example, suggestions could include data list elements or AutoFill candidates.
