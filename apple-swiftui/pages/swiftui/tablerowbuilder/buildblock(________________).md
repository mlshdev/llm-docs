> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/swiftui/tablerowbuilder/buildblock(_:_:_:_:_:_:_:_:))

# buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

Creates a row result from eight sources.

## Declaration

```swift
@export(implementation) static func buildBlock<C0, C1, C2, C3, C4, C5, C6, C7>(_ c0: C0, _ c1: C1, _ c2: C2, _ c3: C3, _ c4: C4, _ c5: C5, _ c6: C6, _ c7: C7) -> TupleTableRowContent<Value, (C0, C1, C2, C3, C4, C5, C6, C7)> where Value == C0.TableRowValue, C0 : TableRowContent, C1 : TableRowContent, C2 : TableRowContent, C3 : TableRowContent, C4 : TableRowContent, C5 : TableRowContent, C6 : TableRowContent, C7 : TableRowContent, C0.TableRowValue == C1.TableRowValue, C1.TableRowValue == C2.TableRowValue, C2.TableRowValue == C3.TableRowValue, C3.TableRowValue == C4.TableRowValue, C4.TableRowValue == C5.TableRowValue, C5.TableRowValue == C6.TableRowValue, C6.TableRowValue == C7.TableRowValue
```

## See Also

### Building a row from sources

- [buildBlock(\_:)](buildblock%28__%29.md): Creates a single row result.
- [buildBlock(\_:\_:)](buildblock%28____%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from two sources.
- [buildBlock(\_:\_:\_:)](buildblock%28______%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from three sources.
- [buildBlock(\_:\_:\_:\_:)](buildblock%28________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from four sources.
- [buildBlock(\_:\_:\_:\_:\_:)](buildblock%28__________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from five sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:)](buildblock%28____________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from six sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](buildblock%28______________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from seven sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28__________________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from nine sources.
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](buildblock%28____________________%29.md): Conforms when `Value` conforms to `Identifiable`. Creates a row result from ten sources.
