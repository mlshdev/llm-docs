> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderreading/readabletypeidentifiersforitemprovider](https://developer.apple.com/documentation/foundation/nsitemproviderreading/readabletypeidentifiersforitemprovider)

# readableTypeIdentifiersForItemProvider (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of UTI strings representing the data types supported by the class.

## Declaration

```swift
static var readableTypeIdentifiersForItemProvider: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Provide uniform type identifiers (UTIs) in order from highest fidelity to lowest. If your app employs a native data representation, place that first in the array.

# readableTypeIdentifiersForItemProvider (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of UTI strings representing the data types supported by the class.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) NSArray<NSString *> * readableTypeIdentifiersForItemProvider;
```

```objectivec
@property (class, atomic, copy, readonly) NSArray<NSString *> * readableTypeIdentifiersForItemProvider;
```

<a id="Discussion"></a>

## Discussion

Provide uniform type identifiers (UTIs) in order from highest fidelity to lowest. If your app employs a native data representation, place that first in the array.
