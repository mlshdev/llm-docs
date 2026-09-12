> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobasicoutputqueue/serviceasync/kserviceasync](https://developer.apple.com/documentation/kernel/iobasicoutputqueue/serviceasync/kserviceasync)

# kServiceAsync

**Interface language:** Objective-C

**Framework:** Kernel

<a id="overview"></a>

## Overview

Set this option to service the queue in an asynchronous manner. The service() call will not block, but a scheduling latency will be introduced before the queue is serviced.
