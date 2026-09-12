> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocumentsample/document](https://developer.apple.com/documentation/healthkit/hkcdadocumentsample/document)

# document (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The CDA document.

## Declaration

```swift
var document: HKCDADocument? { get }
```

<a id="Discussion"></a>

## Discussion

If the user is authorized to access the document’s data, this property contains an [HKCDADocument](../hkcdadocument.md) object representing that data. Otherwise, it is set to `nil`.

The user is asked to authorize each CDA document the first time that document is returned by an [HKDocumentQuery](../hkdocumentquery.md) query. The user can change the access permissions in the Health app.

For samples returned by an [HKSampleQuery](../hksamplequery.md) or an [HKAnchoredObjectQuery](../hkanchoredobjectquery.md), this property is always set to `nil`. To access the document’s data from these samples, create a [HKDocumentQuery](../hkdocumentquery.md) query for the sample’s UUID.

## See Also

### Accessing the Document

- [HKCDADocument](../hkcdadocument.md): An object representing a Clinical Document Architecture (CDA) document in HealthKit.

# document (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The CDA document.

## Declaration

```objectivec
@property (readonly, nullable) HKCDADocument * document;
```

<a id="Discussion"></a>

## Discussion

If the user is authorized to access the document’s data, this property contains an [HKCDADocument](../hkcdadocument.md) object representing that data. Otherwise, it is set to `nil`.

The user is asked to authorize each CDA document the first time that document is returned by an [HKDocumentQuery](../hkdocumentquery.md) query. The user can change the access permissions in the Health app.

For samples returned by an [HKSampleQuery](../hksamplequery.md) or an [HKAnchoredObjectQuery](../hkanchoredobjectquery.md), this property is always set to `nil`. To access the document’s data from these samples, create a [HKDocumentQuery](../hkdocumentquery.md) query for the sample’s UUID.

## See Also

### Accessing the Document

- [HKCDADocument](../hkcdadocument.md): An object representing a Clinical Document Architecture (CDA) document in HealthKit.
