let note2content = '';
const selectHarga = document.querySelectorAll('.selectHarga');

function handleClearClick() {
    const keterangan = document.querySelector('.keterangan');
    keterangan.innerHTML = `
        <div class="note1">
            <p>Choose your ticket for booking</p>
        </div>
        <div class="note2">
            <div class="note3">
                Booking Summary
            </div>
            <p>No fare Selected</p>
        </div>`;
}

function handleSelectHargaClick(element) {
    const keterangan = document.querySelector('.keterangan');
        keterangan.innerHTML=`
            <div class="note1">
                <p>You have 10 minutes to confirm this booking</p>
            </div>
            <div class="note2">
                <div class="note3">
                Booking Summary
                </div>
                <div class="down">
                    <p><b>Departure Flight</b></p>
                    <img src="/assets/Chevron Down.png" alt="">
                </div>
                <div class="bawahnyadown">
                    <p>
                        Wed, 22 Nov 2023 <br>
                        <br>
                        Flight: JT 603 , Economy
                    </p>
                </div>
            
                <div class="jadwalnya">
                    <div class="jadwalpesan1">
                        <h3>08.20</h3>
                        <br>
                        <h3>SUB</h3>
                    </div>
                    <div class="waktupesan">
                        <h5>1j35m</h5>
                        <img src="/assets/Line 2.png" alt="">
                        <h5>Direct</h5>
                    </div>
                    <div class="pesawatnya">
                        <img src="/assets/pesawat1.png" alt="">
                    </div>
                    <div class="jadwalpesan2">
                        <h3>09:55</h3>
                        <br>
                        <h3>CGK</h3>
                    </div>
                </div>
                <div class="garis">
                    <img src="/assets/Line 4.png" alt="">
                </div>
                <p><b>Pricing Summary</b></p>

                <div class="adult">
                    <h5>Adult</h5>
                    <p>IDR</p>
                    <p>1 x 1,055,000</p>
                </div>
                <div class="garis3">
                    <img src="/assets/Line 4.png" alt="">
                </div>
                <div class="adult1">
                    <h5>Published Fare</h5>
                    <p>IDR</p>
                    <p1>1,055,000</p1>
                </div>

                <div class="adult2">
                    <h5>Taxes & Fees</h5>
                    <p>IDR</p>
                    <p1>441,080</p1>
                </div>

                <div class="totalamount">
                    <P><b>Total Amount</b></P>
                    <p><B>IDR</B></p>
                    <h4>1 x 1,055,000</h4>
                </div>
                <div class="continue" >
                    <button type="button"><a href="/HTML/detailpesan.html">Continue</a></button>
                </div>
            </div>
        `;
    const downElement = document.querySelector('.down');
    const note2Element = document.querySelector('.note2')
    downElement.addEventListener('click', function(event) {
        handleBtnDownClick(note2Element, downElement);
    });
}
function handleBtnDownClick(note2Element,downElement) {
    const note2contentNew = `
        <div class="note2">
            <div class="note3">
            Booking Summary
            </div>
            <div class="btnup">
                <p><b>Departure Flight</b></p>
                <img src="/assets/Chevron Up.png" alt="">
            </div>
            
            <div class="garis">
                <img src="/assets/Line 4.png" alt="">
            </div>
            <p><b>Pricing Summary</b></p>

            <div class="adult">
                <h5>Adult</h5>
                <p>IDR</p>
                <p>1 x 1,055,000</p>
            </div>
            <div class="garis3">
                <img src="/assets/Line 4.png" alt="">
            </div>
            <div class="adult1">
                <h5>Published Fare</h5>
                <p>IDR</p>
                <p1>1,055,000</p1>
            </div>

            <div class="adult2">
                <h5>Taxes & Fees</h5>
                <p>IDR</p>
                <p1>441,080</p1>
            </div>

            <div class="totalamount">
                <h4>Total Amount</h4>
                <h4>IDR</h4>
                <h3>1 x 1,055,000</h3>
            </div>
        </div>`;

    const oldElement = downElement.cloneNode(true);
    downElement.parentNode.replaceChild(oldElement, downElement);

    note2content = note2Element.innerHTML;
    note2Element.innerHTML = note2contentNew;

    const btnUpElement = note2Element.querySelector('.btnup');
    btnUpElement.addEventListener('click', function(event) {
        handleBtnUpClick(note2Element);
    });

    downElement = note2Element.querySelector('.down');
    downElement.addEventListener('click', function(event) {
        handleBtnDownClick(note2Element, downElement);
    });
}

function handleBtnUpClick(note2Element) {
    note2Element.innerHTML = note2content;
}

selectHarga.forEach(element => {
    element.addEventListener('click', function(event) {
        handleSelectHargaClick(element);
    });
});
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('clear')) {
        handleClearClick();
    }
});

