> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textfieldlink/init(prompt:label:onsubmit:)

# init(prompt:label:onSubmit:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 9.0+

Creates a TextFieldLink which when pressed will request text input from the user.

## Declaration

```swift
nonisolated init(prompt: Text? = nil, @ContentBuilder label: () -> Label, onSubmit: @escaping (String) -> Void)
```

## Parameters

- `prompt`: Text which describes the reason for requesting text input.
- `label`: A view that describes the action of requesting text input.
- `onSubmit`: An action to perform when text input has been accepted and dismissed

## See Also

### Creating a text field link

- [init(\_:prompt:onSubmit:)](init%28__prompt_onsubmit_%29.md): Conforms when `Label` is `Text`. Creates a TextFieldLink which when pressed will request text input from the user.
