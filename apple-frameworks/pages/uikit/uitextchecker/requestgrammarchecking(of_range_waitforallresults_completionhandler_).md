> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextchecker/requestgrammarchecking(of:range:waitforallresults:completionhandler:)](https://developer.apple.com/documentation/uikit/uitextchecker/requestgrammarchecking(of:range:waitforallresults:completionhandler:))

# requestGrammarChecking(of:range:waitForAllResults:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func requestGrammarChecking(of stringToCheck: String, range: NSRange, waitForAllResults: Bool, completionHandler: (([NSTextCheckingResult]) -> Void)? = nil)
```

```swift
func requestGrammarChecking(of stringToCheck: String, range: NSRange, waitForAllResults: Bool) async -> [NSTextCheckingResult]
```

# requestGrammarCheckingOfString:range:waitForAllResults:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) requestGrammarCheckingOfString:(NSString *) stringToCheck range:(NSRange) range waitForAllResults:(BOOL) waitForAllResults completionHandler:(void (^)(NSArray<NSTextCheckingResult *> *results)) completionHandler;
```
