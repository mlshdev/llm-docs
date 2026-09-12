> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowerstate/1386971-powerdomainbudget](https://developer.apple.com/documentation/kernel/iopmpowerstate/1386971-powerdomainbudget)

# powerDomainBudget

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Describes power in milliWatts a domain in this state can deliver to its children. Unused; drivers may specify 0. }

## Declaration

```objectivec
unsigned long powerDomainBudget;
```
