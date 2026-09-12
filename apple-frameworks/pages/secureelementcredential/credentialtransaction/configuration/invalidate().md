> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialtransaction/configuration/invalidate()](https://developer.apple.com/documentation/secureelementcredential/credentialtransaction/configuration/invalidate())

# invalidate()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Invalidates the configuration and transitions the underlying session state to management.

## Declaration

```swift
func invalidate() async throws
```

<a id="discussion"></a>

## Discussion

Call `invalidate()` in the closure passed to [transactionTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/transactiontask%28_:action:%29) when you complete your wired transaction or card emulation. Your app is responsible for invalidating any wired or card emulation state by calling this method.
