> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/replacedisabled(_:)](https://developer.apple.com/documentation/swiftui/view/replacedisabled(_:))

# replaceDisabled(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 26.0+ · visionOS 1.0+

Prevents replace operations in a text editor.

## Declaration

```swift
nonisolated func replaceDisabled(_ isDisabled: Bool = true) -> some View

```

## Parameters

- `isDisabled`: A Boolean value that indicates whether text replacement in the find and replace interface is disabled.

<a id="return-value"></a>

## Return Value

A view that disables the replace feature of a find and replace interface.

<a id="discussion"></a>

## Discussion

Add this modifier to ensure that people can’t activate the replace feature of a find and replace interface for a [TextEditor](../texteditor.md):

```swift
TextEditor(text: $text)
    .replaceDisabled()
```

If you want to disable both find and replace, use the [findDisabled(\_:)](finddisabled%28__%29.md) modifier instead.

Using this modifer also disables the replace feature of a find and replace interface that you present programmatically using the [findNavigator(isPresented:)](findnavigator%28ispresented_%29.md) method. Be sure to place the disabling modifier closer to the text editor for this to work:

```swift
TextEditor(text: $text)
    .replaceDisabled(isDisabled)
    .findNavigator(isPresented: $isPresented)
```

If you apply this modifer at multiple levels of a view hierarchy, the call closest to the text editor takes precedence. For example, people can activate find and replace for the first text editor in the following example, but only find for the second:

```swift
VStack {
    TextEditor(text: $text1)
        .replaceDisabled(false)
    TextEditor(text: $text2)
}
.replaceDisabled(true)
```

## See Also

### Searching for text in a view

- [findNavigator(isPresented:)](findnavigator%28ispresented_%29.md): Programmatically presents the find and replace interface for text editor views.
- [findDisabled(\_:)](finddisabled%28__%29.md): Prevents find and replace operations in a text editor.
- [FindContext](../findcontext.md): The status of the find navigator for views which support text editing.
