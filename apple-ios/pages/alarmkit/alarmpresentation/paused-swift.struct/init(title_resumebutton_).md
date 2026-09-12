> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/paused-swift.struct/init(title:resumebutton:)](https://developer.apple.com/documentation/alarmkit/alarmpresentation/paused-swift.struct/init(title:resumebutton:))

# init(title:resumeButton:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a pause presentation with a resume button.

## Declaration

```swift
init(title: LocalizedStringResource, resumeButton: AlarmButton)
```

## Parameters

- `title`: The title of the paused UI.
- `resumeButton`: The required resume button for a paused timer.

## See Also

### Creating a resume button

- [resumeButton](resumebutton.md): The appearance of the resume button.
- [title](title.md): The title of the paused UI.
