> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/init()](https://developer.apple.com/documentation/appkit/nsdocument/init())

# init() (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an empty document object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized `NSDocument` object.

<a id="Discussion"></a>

## Discussion

This initializer (the designated initializer) is invoked by each of the other `NSDocument` initialization methods.

You can override this method to perform initialization that must be done both when creating new empty documents and when opening existing documents. Your override must invoke `super` to initialize private `NSDocument` instance variables. It must never return `nil`. If an error can occur during object initialization, check for the error in an override of [init(type:)](init%28type_%29.md), [init(contentsOf:ofType:)](init%28contentsof_oftype_%29.md), or [init(for:withContentsOf:ofType:)](init%28for_withcontentsof_oftype_%29.md), because those methods can return `NSError` objects.

## See Also

### Related Documentation

- [Developing a Document-Based App](../developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.

### Creating a Document Object

- [init(contentsOf:ofType:)](init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [init(for:withContentsOf:ofType:)](init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
- [init(type:)](init%28type_%29.md): Initializes a document of a specified type.

# init (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an empty document object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized `NSDocument` object.

<a id="Discussion"></a>

## Discussion

This initializer (the designated initializer) is invoked by each of the other `NSDocument` initialization methods.

You can override this method to perform initialization that must be done both when creating new empty documents and when opening existing documents. Your override must invoke `super` to initialize private `NSDocument` instance variables. It must never return `nil`. If an error can occur during object initialization, check for the error in an override of [initWithType:error:](init%28type_%29.md), [initWithContentsOfURL:ofType:error:](init%28contentsof_oftype_%29.md), or [initForURL:withContentsOfURL:ofType:error:](init%28for_withcontentsof_oftype_%29.md), because those methods can return `NSError` objects.

## See Also

### Related Documentation

- [Developing a Document-Based App](../developing-a-document-based-app.md): Write an app that creates, manages, edits, and saves text documents.

### Creating a Document Object

- [initWithContentsOfURL:ofType:error:](init%28contentsof_oftype_%29.md): Initializes a document located by a URL of a specified type.
- [initForURL:withContentsOfURL:ofType:error:](init%28for_withcontentsof_oftype_%29.md): Initializes a document with the specified contents, and places the resulting document’s file at the designated location.
- [initWithType:error:](init%28type_%29.md): Initializes a document of a specified type.
