> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/navigationdeciding/willsubmit(forminfo:)](https://developer.apple.com/documentation/webkit/webpage/navigationdeciding/willsubmit(forminfo:))

# willSubmit(formInfo:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Allow the application to process form autofill information before a form submission actually takes place.

## Declaration

```swift
@MainActor mutating func willSubmit(formInfo: WebPage.FormInfo) async
```

## Parameters

- `formInfo`: The form values that will be submitted for this navigation

<a id="discussion"></a>

## Discussion

This is an informative callback only. The form values cannot be changed, nor can the navigation be changed to not submit a form.

The form submission will not actually proceed until after this callback asynchronously resolves.

## Default Implementations

### WebPage.NavigationDeciding Implementations

- [willSubmit(formInfo:)](willsubmit%28forminfo_%29-1wa4u.md): By default, this method does nothing.
