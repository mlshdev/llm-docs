> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/goskextunresolved](https://developer.apple.com/documentation/kernel/goskextunresolved)

# gOSKextUnresolved

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

The value to which a kext's unresolved, weakly-referenced symbols are bound.

## Declaration

```objectivec
const void *const gOSKextUnresolved;
```

<a id="discussion"></a>

## Discussion

A kext must test a weak symbol before using it. A weak symbol is only safe to use if it is not equal to `gOSKextUnresolved`.

Example for a weak symbol named `foo`:

<a id="2557070"></a>

**Listing 1**

```occ
 
 
      if (&foo != gOSKextUnresolved) {
          foo();
      } else {
          printf("foo() is not supported\n");
      }
 
 
```
