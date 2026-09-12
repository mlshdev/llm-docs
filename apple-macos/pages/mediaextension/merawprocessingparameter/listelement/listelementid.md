> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/listelement/listelementid](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/listelement/listelementid)

# listElementID (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A unique number in the list which represents this list option.

## Declaration

```swift
var listElementID: Int { get }
```

<a id="Discussion"></a>

## Discussion

The set of elements in the list may change depending on other configuration parameters, so while the index of an element in this list may change, this ID never changes and is used to report list element selection.

# listElementID (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A unique number in the list which represents this list option.

## Declaration

```objectivec
@property (readonly) NSInteger listElementID;
```

<a id="Discussion"></a>

## Discussion

The set of elements in the list may change depending on other configuration parameters, so while the index of an element in this list may change, this ID never changes and is used to report list element selection.
