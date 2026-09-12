> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundkeyvaluestore](https://developer.apple.com/documentation/playgroundsupport/playgroundkeyvaluestore)

# PlaygroundKeyValueStore

**Framework:** Playground Support  
**Kind:** Class  
**Availability:** Xcode 10.2+ · Swift Playgrounds 2.0+

A data storage container you use to persist information across different sessions.

## Declaration

```swift
class PlaygroundKeyValueStore
```

<a id="overview"></a>

## Overview

The key-value store is available only in Swift Playgrounds and is persistent only in playground books.

The example below sets the value of the key “animal” in the playground key-value store to “Llama” and then retrieves the value of that key back from the key-value store.

<a id="3034545"></a>

**Listing 1**

```swift
// Store a value.
PlaygroundKeyValueStore.current.keyValueStore["animal"] = .string("Llama")

// Retreive that same value.	 
var theAnimal: String? = nil
if let keyValue = PlaygroundKeyValueStore.current.keyValueStore["animal"],
    case .string(let animalType) = keyValue {
    theAnimal = animalType
}
```

## Topics

### Persisting Data

- [current](playgroundkeyvaluestore/3029533-current.md): A reference to the key-value store for the current playground book.
- [subscript(\_:)](playgroundkeyvaluestore/3029534-subscript.md): Reads or stores the value associated with the given key in the key-value store.

## See Also

### Data Persistence

- [PlaygroundValue](playgroundvalue.md): The types you can save in the key-value store or send in messages to live views.
- [playgroundSharedDataDirectory](playgroundshareddatadirectory.md): The path to the directory containing data shared between all playgrounds in Xcode.
