> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ctl_event_data](https://developer.apple.com/documentation/kernel/ctl_event_data)

# ctl_event_data

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.13+

## Declaration

```objectivec
struct ctl_event_data {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure is used for KEV_CTL_SUBCLASS kernel events.

## Topics

### Fields

- [ctl_id](ctl_event_data/1809197-ctl_id.md): The kernel control id.
- [ctl_unit](ctl_event_data/1809200-ctl_unit.md): The kernel control unit.
