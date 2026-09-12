> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/transactionpicker(ispresented:selection:)](https://developer.apple.com/documentation/swiftui/view/transactionpicker(ispresented:selection:))

# transactionPicker(isPresented:selection:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Presents a picker that selects a collection of transactions.

## Declaration

```swift
@MainActor @preconcurrency func transactionPicker(isPresented: Binding<Bool>, selection: Binding<[Transaction]>) -> some View

```

## Parameters

- `isPresented`: The binding to whether the transaction picker should be shown.
- `selection`: The selection of transactions from the transaction picker.
