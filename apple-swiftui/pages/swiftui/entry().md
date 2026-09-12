> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/entry()](https://developer.apple.com/documentation/swiftui/entry())

# Entry()

**Framework:** SwiftUI  
**Kind:** Macro  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an environment values, transaction, container values, or focused values entry.

## Declaration

```swift
@attached(accessor) @attached(peer, names: prefixed(__Key_)) macro Entry()
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)

<a id="Environment-Values"></a>

## Environment Values

Create [EnvironmentValues](environmentvalues.md) entries by extending the [EnvironmentValues](environmentvalues.md) structure with new properties and attaching the @Entry macro to the variable declarations:

```swift
extension EnvironmentValues {
    @Entry var myCustomValue: String = "Default value"
    @Entry var anotherCustomValue = true
}
```

<a id="Transaction-Values"></a>

## Transaction Values

Create [Transaction](transaction.md) entries by extending the [Transaction](transaction.md) structure with new properties and attaching the @Entry macro to the variable declarations:

```swift
extension Transaction {
    @Entry var myCustomValue: String = "Default value"
}
```

<a id="Container-Values"></a>

## Container Values

Create [ContainerValues](containervalues.md) entries by extending the [ContainerValues](containervalues.md) structure with new properties and attaching the @Entry macro to the variable declarations:

```swift
extension ContainerValues {
    @Entry var myCustomValue: String = "Default value"
}
```

<a id="Focused-Values"></a>

## Focused Values

Since the default value for [FocusedValues](focusedvalues.md) is always `nil`, [FocusedValues](focusedvalues.md) entries cannot specify a different default value and must have an Optional type.

Create [FocusedValues](focusedvalues.md) entries by extending the [FocusedValues](focusedvalues.md) structure with new properties and attaching the @Entry macro to the variable declarations:

```swift
extension FocusedValues {
    @Entry var myCustomValue: String?
}
```

## See Also

### Moving an animation to another view

- [withTransaction(\_:\_:)](withtransaction%28____%29.md): Executes a closure with the specified transaction and returns the result.
- [withTransaction(\_:\_:\_:)](withtransaction%28______%29.md): Executes a closure with the specified transaction key path and value and returns the result.
- [transaction(\_:)](view/transaction%28__%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(value:\_:)](view/transaction%28value___%29.md): Applies the given transaction mutation function to all animations used within the view.
- [transaction(\_:body:)](view/transaction%28__body_%29.md): Applies the given transaction mutation function to all animations used within the `body` closure.
- [Transaction](transaction.md): The context of the current state-processing update.
- [TransactionKey](transactionkey.md): A key for accessing values in a transaction.
