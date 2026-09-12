> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645971-anonymous/sock_evt_shutdown](https://developer.apple.com/documentation/kernel/1645971-anonymous/sock_evt_shutdown)

# sock_evt_shutdown

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
sock_evt_shutdown = 6
```

<a id="discussion"></a>

## Discussion

The read and or write side(s) of the connection have been shutdown. The param will point to an integer that indicates the direction that has been shutdown. See 'man 2 shutdown' for more information.
