> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kev_d_vectors](https://developer.apple.com/documentation/kernel/kev_d_vectors)

# kev_d_vectors

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.9+

## Declaration

```objectivec
struct kev_d_vectors {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure is used to append some data to a kernel event.

## Topics

### Fields

- [data_length](kev_d_vectors/1446939-data_length.md): The length of data.
- [data_ptr](kev_d_vectors/1446989-data_ptr.md): A pointer to data.
