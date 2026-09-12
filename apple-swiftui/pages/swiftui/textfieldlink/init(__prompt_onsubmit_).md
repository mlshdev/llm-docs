> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfieldlink/init(_:prompt:onsubmit:)](https://developer.apple.com/documentation/swiftui/textfieldlink/init(_:prompt:onsubmit:))

# init(\_:prompt:onSubmit:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 9.0+

Creates a TextFieldLink which when pressed will request text input from the user.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, prompt: Text? = nil, onSubmit: @escaping (String) -> Void)
```

## Parameters

- `titleResource`: A key for the TextFieldLink’s localized title, that describes the purpose of requesting text input.
- `prompt`: Text which describes the reason for requesting text input.
- `onSubmit`: An action to perform when text input has been accepted and dismissed.

## See Also

### Creating a text field link

- [init(prompt:label:onSubmit:)](init%28prompt_label_onsubmit_%29.md): Conforms when `Label` conforms to `View`. Creates a TextFieldLink which when pressed will request text input from the user.
