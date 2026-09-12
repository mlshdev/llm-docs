> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag/stayquiet(completionhandler:)](https://developer.apple.com/documentation/corenfc/nfciso15693tag/stayquiet(completionhandler:))

# stayQuiet(completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a Stay Quiet command (0x02 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```swift
func stayQuiet(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func stayQuiet() async throws
```

# stayQuietWithCompletionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends a Stay Quiet command (0x02 command code), as defined in the ISO 15693-3 specification, to the tag.

## Declaration

```objectivec
- (void) stayQuietWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```
