> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:setgrammarcheckingenabled:)

# writingToolsCoordinator(\_:setGrammarCheckingEnabled:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Notifies the delegate when the user chooses to disable grammar checking.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, setGrammarCheckingEnabled enabled: Bool)
```

<a id="discussion"></a>

## Discussion

To support the grammar presentation UI, the delegate is notified if the user chooses the option provided in the grammar presentation UI to disable grammar checking for the view. If you use grammar presentation, you should implement this method to respond to that action.

# writingToolsCoordinator:setGrammarCheckingEnabled: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Notifies the delegate when the user chooses to disable grammar checking.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(NSWritingToolsCoordinator *) writingToolsCoordinator setGrammarCheckingEnabled:(BOOL) enabled;
```

<a id="discussion"></a>

## Discussion

To support the grammar presentation UI, the delegate is notified if the user chooses the option provided in the grammar presentation UI to disable grammar checking for the view. If you use grammar presentation, you should implement this method to respond to that action.
