> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkmedium/1810658-removemedium](https://developer.apple.com/documentation/kernel/ionetworkmedium/1810658-removemedium)

# removeMedium

**Interface language:** Objective-C

**Framework:** Kernel

Removes an IONetworkMedium object from a dictionary.

## Declaration

```objectivec
static void removeMedium(
 OSDictionary *dict, 
 const IONetworkMedium *medium); 
```

## Parameters

- `dict`: The OSDictionary object where the medium object should be removed from.
- `medium`: The name of this medium object is used as the key.

<a id="overview"></a>

## Overview

A helper function to remove an entry in a dictionary.

## See Also

### Miscellaneous

- [addMedium](1810064-addmedium.md): Adds an IONetworkMedium object to a dictionary.
- [free](1810085-free.md): Frees the IONetworkMedium object.
- [getFlags](1810101-getflags.md)
- [getIndex](1810123-getindex.md)
- [getKey](1810155-getkey.md)
- [getMediumWithIndex](1810208-getmediumwithindex.md): Finds a medium object from a dictionary with a given index.
- [getMediumWithType](1810258-getmediumwithtype.md): Finds a medium object from a dictionary with a given type.
- [getName](1810301-getname.md)
- [getSpeed](1810359-getspeed.md)
- [getType](1810404-gettype.md)
- [init](1810453-init.md): Initializes an IONetworkMedium object.
- [isEqualTo(const IONetworkMedium \*)](1810500-isequalto.md): Tests for equality between two IONetworkMedium objects.
- [isEqualTo(const OSMetaClassBase \*)](1810544-isequalto.md): Tests for equality between a IONetworkMedium object and an OSObject.
- [medium](1810580-medium.md): Factory method that allocates and initializes an IONetworkMedium object.
- [nameForType](1810627-namefortype.md): Creates a name that describes a medium type.
- [serialize](1810690-serialize.md): Serializes the IONetworkMedium object.
