> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/never](https://developer.apple.com/documentation/swift/never)

# Never

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that has no values and can’t be constructed.

## Declaration

```swift
@frozen enum Never
```

<a id="overview"></a>

## Overview

Use `Never` as the return type of a function that doesn’t return normally — for example, because it runs forever or terminates the program.

```swift
// An infinite loop never returns.
func forever() -> Never {
    while true {
        print("I will print forever.")
    }
}

// Calling fatalError(_:file:line:) unconditionally stops the program.
func crashAndBurn() -> Never {
    fatalError("Something very, very bad happened")
}
```

A function that returns `Never` is called a *nonreturning* function. Closures, methods, computed properties, and subscripts can also be nonreturning.

There’s no way to create an instance of `Never`; this characteristic makes it an *uninhabited* type. You can use an uninhabited type like `Never` to represent states in your program that are impossible to reach during execution. Swift’s type system uses this information — for example, to reason about control statements in cases that are known to be unreachable.

```swift
let favoriteNumber: Result<Int, Never> = .success(42)
switch favoriteNumber {
case .success(let value):
    print("My favorite number is", value)
}
```

In the code above, `favoriteNumber` has a failure type of `Never`, indicating that it always succeeds. The switch statement is therefore exhaustive, even though it doesn’t contain a `.failure` case, because that case could never be reached.

## Topics

### Type Aliases

- [Never.MapContentValue](never/mapcontentvalue.md)
- [Never.Specification](never/specification.md)
- [Never.UnwrappedType](never/unwrappedtype.md)
- [Never.ValueType](never/valuetype.md)

### Type Properties

- [defaultResolverSpecification](never/defaultresolverspecification.md)

### Default Implementations

- [AtomicRepresentable Implementations](never/atomicrepresentable-implementations.md)
- [Comparable Implementations](never/comparable-implementations.md)
- [Decodable Implementations](never/decodable-implementations.md)
- [Encodable Implementations](never/encodable-implementations.md)
- [Equatable Implementations](never/equatable-implementations.md)
- [Hashable Implementations](never/hashable-implementations.md)
- [Identifiable Implementations](never/identifiable-implementations.md)
- [TestScoping Implementations](never/testscoping-implementations.md)

## Relationships

### Conforms To

- [AccessibilityRotorContent](https://developer.apple.com/documentation/swiftui/accessibilityrotorcontent)
- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)
- [AppIntent](https://developer.apple.com/documentation/appintents/appintent)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [AttachmentContent](https://developer.apple.com/documentation/realitykit/attachmentcontent)
- [AxisContent](https://developer.apple.com/documentation/charts/axiscontent)
- [AxisMark](https://developer.apple.com/documentation/charts/axismark)
- [BitwiseCopyable](bitwisecopyable.md)
- [CMSampleBuffer.Content](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/content)
- [Chart3DContent](https://developer.apple.com/documentation/charts/chart3dcontent)
- [ChartContent](https://developer.apple.com/documentation/charts/chartcontent)
- [Commands](https://developer.apple.com/documentation/swiftui/commands)
- [Comparable](comparable.md)
- [CompositorContent](https://developer.apple.com/documentation/swiftui/compositorcontent)
- [ControlWidgetConfiguration](https://developer.apple.com/documentation/swiftui/controlwidgetconfiguration)
- [ControlWidgetTemplate](https://developer.apple.com/documentation/swiftui/controlwidgettemplate)
- [ConvertibleFromGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertiblefromgeneratedcontent)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [CoordinateSpace3D](https://developer.apple.com/documentation/spatial/coordinatespace3d)
- [CoordinateSpace3DFloat](https://developer.apple.com/documentation/spatial/coordinatespace3dfloat)
- [Copyable](copyable.md)
- [CustomHoverEffect](https://developer.apple.com/documentation/swiftui/customhovereffect)
- [CustomizableToolbarContent](https://developer.apple.com/documentation/swiftui/customizabletoolbarcontent)
- [Decodable](decodable.md)
- [DynamicInstructions](https://developer.apple.com/documentation/foundationmodels/dynamicinstructions)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Error](error.md)
- [Escapable](escapable.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Gesture](https://developer.apple.com/documentation/swiftui/gesture)
- [Hashable](hashable.md)
- [Identifiable](identifiable.md)
- [ImmersiveSpaceContent](https://developer.apple.com/documentation/swiftui/immersivespacecontent)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentResult](https://developer.apple.com/documentation/appintents/intentresult)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [Keyframes](https://developer.apple.com/documentation/swiftui/keyframes)
- [LanguageModelSession.DynamicProfile](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile)
- [MapContent](https://developer.apple.com/documentation/mapkit/mapcontent)
- [MapSelectable](https://developer.apple.com/documentation/mapkit/mapselectable)
- [ParameterSummary](https://developer.apple.com/documentation/appintents/parametersummary)
- [PersistentlyIdentifiable](https://developer.apple.com/documentation/appintents/persistentlyidentifiable)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [ReportableMetadata](https://developer.apple.com/documentation/statereporting/reportablemetadata)
- [Scene](https://developer.apple.com/documentation/swiftui/scene)
- [SceneAccessoryContent](https://developer.apple.com/documentation/swiftui/sceneaccessorycontent)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [ShapeStyle](https://developer.apple.com/documentation/swiftui/shapestyle)
- [SortComparator](https://developer.apple.com/documentation/foundation/sortcomparator)
- [StoreContent](https://developer.apple.com/documentation/storekit/storecontent)
- [TableColumnContent](https://developer.apple.com/documentation/swiftui/tablecolumncontent)
- [TableRowContent](https://developer.apple.com/documentation/swiftui/tablerowcontent)
- [TestScoping](https://developer.apple.com/documentation/testing/testscoping)
- [ToolbarContent](https://developer.apple.com/documentation/swiftui/toolbarcontent)
- [TransferRepresentation](https://developer.apple.com/documentation/coretransferable/transferrepresentation)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)
- [View](https://developer.apple.com/documentation/swiftui/view)
- [WidgetConfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration)

## See Also

### Exiting a Program

- [fatalError(\_:file:line:)](fatalerror%28__file_line_%29.md): Unconditionally prints a given message and stops execution.
