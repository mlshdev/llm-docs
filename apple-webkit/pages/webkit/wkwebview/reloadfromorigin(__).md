> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/reloadfromorigin(_:)](https://developer.apple.com/documentation/webkit/wkwebview/reloadfromorigin(_:))

# reloadFromOrigin(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.

## Declaration

```swift
@IBAction func reloadFromOrigin(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the message.

<a id="Discussion"></a>

## Discussion

Make this method the action of any controls that trigger a reload of your web content. Connect your controls to this method programmatically or in Interface Builder.

## See Also

### Managing the loading process

- [reload()](reload%28%29.md): Reloads the current webpage.
- [reload(\_:)](reload%28__%29.md): Reloads the current webpage.
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [stopLoading()](stoploading%28%29.md): Stops loading all resources on the current page.
- [stopLoading(\_:)](stoploading%28__%29.md): Stops loading all resources on the current page.

# reloadFromOrigin: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.

## Declaration

```objectivec
- (void) reloadFromOrigin:(id) sender;
```

## Parameters

- `sender`: The object that sent the message.

<a id="Discussion"></a>

## Discussion

Make this method the action of any controls that trigger a reload of your web content. Connect your controls to this method programmatically or in Interface Builder.

## See Also

### Managing the loading process

- [reload](reload%28%29.md): Reloads the current webpage.
- [reload:](reload%28__%29.md): Reloads the current webpage.
- [reloadFromOrigin](reloadfromorigin%28%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [stopLoading](stoploading%28%29.md): Stops loading all resources on the current page.
- [stopLoading:](stoploading%28__%29.md): Stops loading all resources on the current page.
