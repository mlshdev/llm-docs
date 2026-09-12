> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1572744-constants_for_object_specifiers_/kaemiddle](https://developer.apple.com/documentation/coreservices/1572744-constants_for_object_specifiers_/kaemiddle)

# kAEMiddle

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kAEMiddle = 'midd'
```

<a id="discussion"></a>

## Discussion

Specifies the middle element in the container. If an object specifier specifies `kAEMiddle` and the number of elements in the container is even, the Apple Event Manager rounds down. For example, in a range of four words the second word is the “middle” word.
