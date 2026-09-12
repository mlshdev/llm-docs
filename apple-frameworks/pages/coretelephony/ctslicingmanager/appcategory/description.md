> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/appcategory/description](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/appcategory/description)

# description

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A string representation of the application category.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

This property provides a string representation of the category, suitable for debugging and logging purposes.

> **Important**

> This description isn’t localized, so don’t display it to people in your app’s interface. For text that people see, provide your own localized strings based on the category value.
