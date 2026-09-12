> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkapplicationdelegateadaptor](https://developer.apple.com/documentation/swiftui/wkapplicationdelegateadaptor)

# WKApplicationDelegateAdaptor

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 7.0+

A property wrapper that is used in `App` to provide a delegate from WatchKit.

## Declaration

```swift
@MainActor @preconcurrency @propertyWrapper struct WKApplicationDelegateAdaptor<DelegateType> where DelegateType : NSObject, DelegateType : WKApplicationDelegate
```

## Mentioned In

- [Migrating to the SwiftUI life cycle](migrating-to-the-swiftui-life-cycle.md)

## Topics

### Creating a delegate adaptor

- [init(\_:)](wkapplicationdelegateadaptor/init%28__%29.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `Observable`, and `DelegateType` conforms to `WKApplicationDelegate`. Creates an `WKApplicationDelegateAdaptor` using a WatchKit Application Delegate.

### Getting the delegate adaptor

- [projectedValue](wkapplicationdelegateadaptor/projectedvalue.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `ObservableObject`, and `DelegateType` conforms to `WKApplicationDelegate`. A projection of the observed object that creates bindings to its properties using dynamic member lookup.
- [wrappedValue](wkapplicationdelegateadaptor/wrappedvalue.md): The underlying delegate.

## Relationships

### Conforms To

- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Targeting watchOS

- [WKExtensionDelegateAdaptor](wkextensiondelegateadaptor.md): Deprecated. A property wrapper type that you use to create a WatchKit extension delegate.
