> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/stoploading(_:)](https://developer.apple.com/documentation/webkit/wkwebview/stoploading(_:))

# stopLoading(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops loading all resources on the current page.

## Declaration

```swift
@IBAction func stopLoading(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the message.

<a id="Discussion"></a>

## Discussion

Make this method the action of any controls that stop the loading of your web content. Connect your controls to this method programmatically or in Interface Builder.

## See Also

### Managing the loading process

- [reload()](reload%28%29.md): Reloads the current webpage.
- [reload(\_:)](reload%28__%29.md): Reloads the current webpage.
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [reloadFromOrigin(\_:)](reloadfromorigin%28__%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [stopLoading()](stoploading%28%29.md): Stops loading all resources on the current page.

# stopLoading: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops loading all resources on the current page.

## Declaration

```objectivec
- (void) stopLoading:(id) sender;
```

## Parameters

- `sender`: The object that sent the message.

<a id="Discussion"></a>

## Discussion

Make this method the action of any controls that stop the loading of your web content. Connect your controls to this method programmatically or in Interface Builder.

## See Also

### Managing the loading process

- [reload](reload%28%29.md): Reloads the current webpage.
- [reload:](reload%28__%29.md): Reloads the current webpage.
- [reloadFromOrigin](reloadfromorigin%28%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [reloadFromOrigin:](reloadfromorigin%28__%29.md): Reloads the current webpage, and performs end-to-end revalidation of the content using cache-validating conditionals, if possible.
- [stopLoading](stoploading%28%29.md): Stops loading all resources on the current page.
