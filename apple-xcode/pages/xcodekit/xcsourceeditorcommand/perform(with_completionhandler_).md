> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommand/perform(with:completionhandler:)](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommand/perform(with:completionhandler:))

# perform(with:completionHandler:) (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Performs the action associated with the command using the information in an invocation.

## Declaration

```swift
func perform(with invocation: XCSourceEditorCommandInvocation, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func perform(with invocation: XCSourceEditorCommandInvocation) async throws
```

## Parameters

- `invocation`: The invocation of the command to be invoked.
- `completionHandler`: A block to be executed when the command finishes.

## Mentioned In

- [Creating a Source Editor Extension](../creating-a-source-editor-extension.md)
- [Testing Your Source Editor Extension](../testing-your-source-editor-extension.md)

<a id="Discussion"></a>

## Discussion

Xcode passes the code a completion handler that it must invoke to finish performing the command, passing `nil` on success or an error on failure. A canceled command must still call the completion handler, passing `nil`.

There are no guarantees about the thread or queue on which the cancellation handler is invoked.

# performCommandWithInvocation:completionHandler: (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Performs the action associated with the command using the information in an invocation.

## Declaration

```objectivec
- (void) performCommandWithInvocation:(XCSourceEditorCommandInvocation *) invocation completionHandler:(void (^)(NSError *nilOrError)) completionHandler;
```

## Parameters

- `invocation`: The invocation of the command to be invoked.
- `completionHandler`: A block to be executed when the command finishes.

## Mentioned In

- [Creating a Source Editor Extension](../creating-a-source-editor-extension.md)
- [Testing Your Source Editor Extension](../testing-your-source-editor-extension.md)

<a id="Discussion"></a>

## Discussion

Xcode passes the code a completion handler that it must invoke to finish performing the command, passing `nil` on success or an error on failure. A canceled command must still call the completion handler, passing `nil`.

There are no guarantees about the thread or queue on which the cancellation handler is invoked.
