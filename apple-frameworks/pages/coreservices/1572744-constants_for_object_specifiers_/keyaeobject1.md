> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1572744-constants_for_object_specifiers_/keyaeobject1

# keyAEObject1

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
keyAEObject1 = 'obj1'
```

<a id="discussion"></a>

## Discussion

Identifies a descriptor for the element that is currently being compared to the object or data specified by the descriptor for the keyword `keyAEObject2`. Either object can be described by a descriptor of type `typeObjectSpecifier` or `typeObjectBeingExamined`.

A descriptor of `typeObjectBeingExamined` acts as a placeholder for each of the successive elements in a container when the Apple Event Manager tests those elements one at a time.
