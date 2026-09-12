> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/setdefaultapplication(at:toopenfileat:completion:)](https://developer.apple.com/documentation/appkit/nsworkspace/setdefaultapplication(at:toopenfileat:completion:))

# setDefaultApplication(at:toOpenFileAt:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening a specific file.

## Declaration

```swift
func setDefaultApplication(at applicationURL: URL, toOpenFileAt url: URL, completion completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setDefaultApplication(at applicationURL: URL, toOpenFileAt url: URL) async throws
```

## Parameters

- `applicationURL`: The URL of the default app to use when opening the file.
- `url`: The URL of the file to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to use for a specific file (rather than all files of that content type). The system requires write access to the specified `url` before it can make the change.

If a change requires user consent, the system asks the user for consent asynchronously before invoking the completion handler.

This function doesn’t apply to non-file URLs.

## See Also

### Setting Default Application Information

- [setDefaultApplication(at:toOpen:completion:)](setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplication(at:toOpenContentTypeOfFileAt:completion:)](setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
- [setDefaultApplication(at:toOpenURLsWithScheme:completion:)](setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.

# setDefaultApplicationAtURL:toOpenFileAtURL:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Sets the default app to use when opening a specific file.

## Declaration

```objectivec
- (void) setDefaultApplicationAtURL:(NSURL *) applicationURL toOpenFileAtURL:(NSURL *) url completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `applicationURL`: The URL of the default app to use when opening the file.
- `url`: The URL of the file to open.
- `completionHandler`: The completion handler to call after the operation completes.

<a id="Discussion"></a>

## Discussion

This method sets the default app to use for a specific file (rather than all files of that content type). The system requires write access to the specified `url` before it can make the change.

If a change requires user consent, the system asks the user for consent asynchronously before invoking the completion handler.

This function doesn’t apply to non-file URLs.

## See Also

### Setting Default Application Information

- [setDefaultApplicationAtURL:toOpenContentType:completionHandler:](setdefaultapplication%28at_toopen_completion_%29.md): Sets the default app to use when opening files of a specific content type.
- [setDefaultApplicationAtURL:toOpenContentTypeOfFileAtURL:completionHandler:](setdefaultapplication%28at_toopencontenttypeoffileat_completion_%29.md): Sets the default app to use when opening files of a specific content type defined by a file URL.
- [setDefaultApplicationAtURL:toOpenURLsWithScheme:completionHandler:](setdefaultapplication%28at_toopenurlswithscheme_completion_%29.md): Sets the default app to use when opening files of a specific scheme.
