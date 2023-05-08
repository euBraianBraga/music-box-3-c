import React from "react";
import {
    BrowserRouter,
    Routes,
    Route 
} from "react-router-dom";

import Musicas from "./pages/Musicas";
import Adicionar from "./pages/Adicionar";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/musicas" element={<Musicas />} />
            <Route path="/adicionar" element={<Adicionar />} />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;